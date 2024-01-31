"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Create Store"
            description="Add a new store for products and all"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future Store Create
        </Modal>
    )
}