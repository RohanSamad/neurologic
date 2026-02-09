export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: string
          created_at: string
          privacy_settings: Json
        }
        Insert: {
          id: string
          email: string
          role?: string
          created_at?: string
          privacy_settings?: Json
        }
        Update: {
          id?: string
          email?: string
          role?: string
          created_at?: string
          privacy_settings?: Json
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
