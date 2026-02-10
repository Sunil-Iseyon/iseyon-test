/**
 * Local Tina Client (Development)
 * This file provides a simple file-based client for local development
 * In production with Tina Cloud, the generated client will be used instead
 */

import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

function readJsonFile(filePath: string) {
  try {
    const fullPath = path.join(CONTENT_DIR, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

function getAllFilesInDir(dir: string) {
  try {
    const fullPath = path.join(CONTENT_DIR, dir);
    const files = fs.readdirSync(fullPath);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const filePath = path.join(dir, file);
        const fullFilePath = path.join(CONTENT_DIR, filePath);
        const relativePath = file;
        const data = readJsonFile(filePath);
        const stats = fs.statSync(fullFilePath);
        
        return {
          node: {
            ...data,
            _sys: {
              filename: file.replace('.json', ''),
              path: filePath,
              relativePath: relativePath,
              createdAt: stats.birthtime.toISOString(),
              lastModifiedAt: stats.mtime.toISOString(),
            }
          },
          cursor: relativePath,
        };
      });
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

const client = {
  queries: {
    hero: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`hero/${relativePath}`);
      return Promise.resolve({
        data: { hero: data },
      });
    },
    servicesConnection: () => {
      const edges = getAllFilesInDir('services');
      return Promise.resolve({
        data: {
          servicesConnection: { edges },
        },
      });
    },
    testimonialsConnection: () => {
      const edges = getAllFilesInDir('testimonials');
      return Promise.resolve({
        data: {
          testimonialsConnection: { edges },
        },
      });
    },
    partnersConnection: () => {
      const edges = getAllFilesInDir('partners');
      return Promise.resolve({
        data: {
          partnersConnection: { edges },
        },
      });
    },
    banner: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`banner/${relativePath}`);
      return Promise.resolve({
        data: { banner: data },
      });
    },
    project: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`project/${relativePath}`);
      return Promise.resolve({
        data: { project: data },
      });
    },
    teamMembersConnection: () => {
      const edges = getAllFilesInDir('team');
      return Promise.resolve({
        data: {
          teamMembersConnection: { edges },
        },
      });
    },
    companyValuesConnection: () => {
      const edges = getAllFilesInDir('company-values');
      return Promise.resolve({
        data: {
          companyValuesConnection: { edges },
        },
      });
    },
    vision: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`vision/${relativePath}`);
      return Promise.resolve({
        data: { vision: data },
      });
    },
    serviceContentConnection: () => {
      const edges = getAllFilesInDir('service-content');
      return Promise.resolve({
        data: {
          serviceContentConnection: { edges },
        },
      });
    },
    serviceContent: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`service-content/${relativePath}`);
      return Promise.resolve({
        data: { serviceContent: data },
      });
    },
    insights: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`insights/${relativePath}`);
      return Promise.resolve({
        data: { insights: data },
      });
    },
    insightsConnection: () => {
      const edges = getAllFilesInDir('insights');
      return Promise.resolve({
        data: {
          insightsConnection: { edges },
        },
      });
    },
    biInsights: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`insights/bi/${relativePath}`);
      return Promise.resolve({
        data: { biInsights: data },
      });
    },
    internalApps: ({ relativePath }: { relativePath: string }) => {
      const data = readJsonFile(`insights/internal-apps/${relativePath}`);
      return Promise.resolve({
        data: { internalApps: data },
      });
    },
    privacyPolicyConnection: () => {
      const edges = getAllFilesInDir('privacy-policy');
      return Promise.resolve({
        data: {
          privacyPolicyConnection: { edges },
        },
      });
    },
    blogPostsConnection: () => {
      const edges = getAllFilesInDir('blog');
      return Promise.resolve({
        data: {
          blogPostsConnection: { edges },
        },
      });
    },
    communityGalleryConnection: () => {
      const edges = getAllFilesInDir('community/gallery');
      return Promise.resolve({
        data: {
          communityGalleryConnection: { edges },
        },
      });
    },
    communityTimelineConnection: () => {
      const edges = getAllFilesInDir('community/timeline');
      return Promise.resolve({
        data: {
          communityTimelineConnection: { edges },
        },
      });
    },
  },
};

export default client;
