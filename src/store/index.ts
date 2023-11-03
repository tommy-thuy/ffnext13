import { UseStoreProps, ZustandUseStoreProps } from '@/types'

import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const myMiddlewares = (f: StateCreator<ZustandUseStoreProps>) =>
    devtools(persist(f, { name: 'favorite-store' }))


export const useStatusStore = create<UseStoreProps>()((set) => ({
  status: {
    isDefault: false,
    isHovered: false,
    skillId: '',
  },
  setStatus: (skillId: string) => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: false,
          isHovered: true,
          skillId,
        },
      }
    })
  },
  clearStatus: () => {
    set((state) => {
      return {
        ...state,
        status: {
          isDefault: true,
          isHovered: false,
          skillId: '',
        },
      }
    })
  },
}))



export const useFavoriteStore = create<ZustandUseStoreProps>()(
    myMiddlewares(
        (set) => ({
            favoritedProjects: {
                projectsDetails: [],
            },
            addToFavorite: (projectId: string) => {
                set((state) => {
                    const existingProjectIndex = state.favoritedProjects.projectsDetails.findIndex(
                        (project) => project.id === projectId
                    );

                    if (existingProjectIndex !== -1) {
                        const updatedProjects = [...state.favoritedProjects.projectsDetails];
                        updatedProjects[existingProjectIndex] = {
                            ...updatedProjects[existingProjectIndex],
                            count: updatedProjects[existingProjectIndex].count + 1,
                        };

                        return {
                            favoritedProjects: {
                                projectsDetails: updatedProjects,
                            },
                        };
                    } else {
                        return {
                            favoritedProjects: {
                                projectsDetails: [
                                    ...state.favoritedProjects.projectsDetails,
                                    { id: projectId, count: 1 },
                                ],
                            },
                        };
                    }
                });
            },
            removeFromFavorite: (projectId: string) => {
                set((state) => ({
                    favoritedProjects: {
                        projectsDetails: state.favoritedProjects.projectsDetails.filter(
                            (project) => project.id !== projectId
                        ),
                    },
                }));
            },
        })
    )
);


