import React, { useState } from 'react';
import { useMenu } from './MenuContext';
import { Trash2, Plus, Save, Edit2, LogOut, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { categories, updateCategory, addCategory, deleteCategory, addItem, updateItem, deleteItem, resetMenu } = useMenu();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editingCategory, setEditingCategory] = useState<number | null>(null);
  const [editingItem, setEditingItem] = useState<{ catIndex: number; itemIndex: number } | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Menu Dashboard</h1>
          <div className="flex gap-4">
             <button onClick={() => navigate('/')} className="text-gray-600 hover:text-primary">
              View Menu
            </button>
            <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-2 text-red-500 hover:text-red-700">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Manage Menu</h2>
            <button onClick={resetMenu} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                <RefreshCw size={16}/> Reset to Default
            </button>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
              {editingCategory === catIndex ? (
                <div className="flex gap-2 w-full">
                  <input
                    value={category.titleEn}
                    onChange={(e) => updateCategory(catIndex, { ...category, titleEn: e.target.value })}
                    className="p-2 border rounded w-1/3"
                    placeholder="English Title"
                  />
                  <input
                    value={category.titleAr}
                    onChange={(e) => updateCategory(catIndex, { ...category, titleAr: e.target.value })}
                    className="p-2 border rounded w-1/3 font-arabic"
                    placeholder="Arabic Title"
                  />
                  <button onClick={() => setEditingCategory(null)} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
                    <Save size={18} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <h3 className="font-bold text-lg text-primary">{category.titleEn}</h3>
                  <span className="text-gray-400">|</span>
                  <h3 className="font-bold text-lg text-gray-600 font-arabic">{category.titleAr}</h3>
                  <button onClick={() => setEditingCategory(catIndex)} className="text-gray-400 hover:text-primary">
                    <Edit2 size={16} />
                  </button>
                </div>
              )}
              <div className="flex gap-2">
                <button 
                    onClick={() => {
                        if(window.confirm('Delete this category?')) deleteCategory(catIndex)
                    }} 
                    className="text-red-400 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="grid gap-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/30 transition-colors">
                    {editingItem?.catIndex === catIndex && editingItem?.itemIndex === itemIndex ? (
                      <div className="flex gap-2 w-full">
                        <input
                          value={item.nameEn}
                          onChange={(e) => updateItem(catIndex, itemIndex, { ...item, nameEn: e.target.value })}
                          className="p-2 border rounded w-1/2"
                          placeholder="English Name"
                        />
                        <input
                          value={item.nameAr}
                          onChange={(e) => updateItem(catIndex, itemIndex, { ...item, nameAr: e.target.value })}
                          className="p-2 border rounded w-1/2 font-arabic"
                          placeholder="Arabic Name"
                        />
                        <button onClick={() => setEditingItem(null)} className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
                          <Save size={18} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{item.nameEn}</p>
                          <p className="text-sm text-gray-500 font-arabic">{item.nameAr}</p>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => setEditingItem({ catIndex, itemIndex })} className="text-gray-400 hover:text-primary">
                            <Edit2 size={16} />
                          </button>
                          <button onClick={() => deleteItem(catIndex, itemIndex)} className="text-red-400 hover:text-red-600">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addItem(catIndex, { nameEn: 'New Item', nameAr: 'صنف جديد' })}
                  className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Plus size={18} /> Add Item
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => addCategory({ titleEn: 'New Category', titleAr: 'قسم جديد', items: [] })}
          className="w-full py-4 bg-white border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-bold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Add New Category
        </button>
      </div>
    </div>
  );
};
