import { useState } from 'react';
import { FormData } from '../types/form';

export const useForm = (initialData: Partial<FormData> = {}) => {
  const [formData, setFormData] = useState<Partial<FormData>>({
    restricoes: [],
    ...initialData
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({
      ...prev,
      ...updates
    }));
  };

  const resetForm = () => {
    setFormData({ restricoes: [] });
  };

  const isFormValid = (): boolean => {
    return !!(
      formData.idade &&
      formData.genero &&
      formData.peso &&
      formData.altura &&
      formData.objetivo &&
      formData.atividade
    );
  };

  return {
    formData,
    updateField,
    updateFormData,
    resetForm,
    isFormValid
  };
};