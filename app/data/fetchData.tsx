import { useState } from "react";
import { supabase } from "./supabase-client";
import { Message } from "../types/types";

export function useMessageData() {
  const [messageData, setMessageData] = useState<Message[]>([]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("Data").select("*");

      if (error) {
        console.error("Supabaseエラー詳細:", error);
        return;
      }

      if (data) {
        setMessageData(data as Message[]);
      } else {
        console.log("データがnullまたはundefinedです");
      }
    } catch (err) {
      console.error("メッセージ取得エラー:", err);
    } finally {
      console.log("データ取得処理完了");
    }
  };

  if (messageData.length === 0) {
    fetchData();
  }

  return messageData;
}
