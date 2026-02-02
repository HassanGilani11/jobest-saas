import { create } from "zustand";

const useModalStore = create((set) => ({
	isOpen: false,
	action: "",
	openModal: (actionType) => set({ isOpen: true, action: actionType }),
	// openModalWithAction: (actionType) =>
	// 	set({ isOpen: true, action: actionType }),

	closeModal: () => {
		set({ isOpen: false, action: "" });
		const { clearData } = useStore.getState();
		clearData();
	},
}));

export const useStore = create((set) => ({
	data: [], // Initialize with an empty array or existing data
	addData: (newData) =>
		set((state) => ({
			data: [...state.data, newData],
		})),
	clearData: () => set({ data: [] }),
}));

export default useModalStore;
