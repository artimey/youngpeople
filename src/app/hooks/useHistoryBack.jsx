import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

export const useHistoryBack = () => {
  const navigate = useNavigate();
  const handleBack = useCallback(() => navigate(-1), [navigate]);

  return { handleBack };
}
