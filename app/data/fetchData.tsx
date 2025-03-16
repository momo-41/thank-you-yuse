import { useState } from 'react';
import { supabase } from './supabaseClient';
import { Message } from '../types/types';


export function useMessageData() {
  const [messageData, setMessageData] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('Data')
        .select('*');
      
      if (error) {
        console.error('Supabaseエラー詳細:', error);
        setError(error);
        return;
      }

      if (data) {
        setMessageData(data as Message[]);
      } else {
        console.log('データがnullまたはundefinedです');
      }
    } catch (err) {
      console.error('メッセージ取得エラー:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
      console.log('データ取得処理完了');
    }
  };

  if (messageData.length === 0 && !loading && !error) {
    fetchData();
  }

  return messageData
}