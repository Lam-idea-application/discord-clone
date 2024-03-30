"use client";

import { useEffect, useState } from "react";
import CreateServerModal from "../ui/modals/create-server-modal";
import InviteModal from "../ui/modals/invite-modal";
import EditServerModal from "../ui/modals/edit-server-modal";
import MembersModal from "../ui/modals/members-modal";
import CreateChannelModal from "../ui/modals/create-channel-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
    </>
  );
};
