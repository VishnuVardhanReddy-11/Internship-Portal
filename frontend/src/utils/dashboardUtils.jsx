// src/utils/dashboardUtils.js

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const getProgressColor = (progress) => {
  if (progress >= 80) return 'green';
  if (progress >= 50) return 'yellow';
  return 'blue';
};

export const getStatusClass = (status) => {
  switch (status) {
    case 'Completed': return 'status-completed';
    case 'In Progress': return 'status-progress';
    case 'Enrolled': return 'status-enrolled';
    default: return 'status-progress';
  }
};

export const getRandomTimeRemaining = () => {
  const hours = Math.floor(Math.random() * 20) + 1;
  return `${hours}h remaining`;
};
