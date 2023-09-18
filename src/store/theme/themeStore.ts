import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type ThemeState = {
  mode: string;
};

type ThemeActions = {
  changeMode: () => void;
};

export const useThemeStore = create<ThemeState & ThemeActions>()(
  devtools(
    persist(
      immer<ThemeState & ThemeActions>((set) => ({
        mode: "light",
        changeMode: () => {
          set((state) => {
            state.mode = state.mode == "light" ? "dark" : "light";
          });
        },
      })),
      {
        name: "color_mode",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          mode: state.mode,
        }),
      }
    )
  )
);
