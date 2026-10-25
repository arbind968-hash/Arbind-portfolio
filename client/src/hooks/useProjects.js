import { useState } from 'react';
import { initialProjects } from '../data/projects';

export const useProjects = () => {
  const [projects] = useState(initialProjects);
  return { projects, loading: false, error: null };
};

export default useProjects;
