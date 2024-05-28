import { promises as fs } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

// export interface FileSystemNode {
//   id: string;
//   path: string;
//   name: string;
//   type: 'file' | 'directory';
//   children?: FileSystemNode[];
// }

export async function openFile(path: string): Promise<string> {
  return await fs.readFile(path, 'utf-8');
}

export async function walkDir(path: string): Promise<FileSystemNode> {
  const stats = await fs.lstat(path);
  const isDirectory = stats.isDirectory();
  if (isDirectory) {
    const contents = await fs.readdir(path);
    const children: FileSystemNode[] = await Promise.all(contents.map(async (childName) => {
      const childPath = join(path, childName);
      return walkDir(childPath);
    }));
    return {
      id: uuidv4(),
      path: path,
      name: path.split('/').pop() || path,
      type: 'directory',
      children,
    };
  } else {
    return {
      id: uuidv4(),
      path: path,
      name: path.split('/').pop() || path,
      type: 'file'
    };
  }
}