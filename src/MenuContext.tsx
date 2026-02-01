import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { menuData as initialData, MenuCategory, MenuItem } from './data';

interface MenuContextType {
  categories: MenuCategory[];
  updateCategory: (index: number, category: MenuCategory) => void;
  addCategory: (category: MenuCategory) => void;
  deleteCategory: (index: number) => void;
  addItem: (categoryIndex: number, item: MenuItem) => void;
  updateItem: (categoryIndex: number, itemIndex: number, item: MenuItem) => void;
  deleteItem: (categoryIndex: number, itemIndex: number) => void;
  resetMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<MenuCategory[]>(() => {
    const saved = localStorage.getItem('menuData');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('menuData', JSON.stringify(categories));
  }, [categories]);

  const updateCategory = (index: number, category: MenuCategory) => {
    const newCategories = [...categories];
    newCategories[index] = category;
    setCategories(newCategories);
  };

  const addCategory = (category: MenuCategory) => {
    setCategories([...categories, category]);
  };

  const deleteCategory = (index: number) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  const addItem = (categoryIndex: number, item: MenuItem) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].items.push(item);
    setCategories(newCategories);
  };

  const updateItem = (categoryIndex: number, itemIndex: number, item: MenuItem) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].items[itemIndex] = item;
    setCategories(newCategories);
  };

  const deleteItem = (categoryIndex: number, itemIndex: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].items = newCategories[categoryIndex].items.filter((_, i) => i !== itemIndex);
    setCategories(newCategories);
  };

  const resetMenu = () => {
    setCategories(initialData);
  };

  return (
    <MenuContext.Provider value={{ categories, updateCategory, addCategory, deleteCategory, addItem, updateItem, deleteItem, resetMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
