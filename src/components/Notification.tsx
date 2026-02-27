import React from 'react';
import { Check } from 'lucide-react';

interface NotificationProps {
  message: string | null;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-24 right-5 z-50 bg-stone-900 border-2 border-amber-600 text-amber-500 px-6 py-4 rounded-lg shadow-[0_0_20px_rgba(217,119,6,0.3)] animate-bounce flex items-center gap-3">
      <Check size={20} />
      <span className="font-bold font-medieval text-lg">{message}</span>
    </div>
  );
};

export default Notification;
