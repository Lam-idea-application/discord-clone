"use client";

import { useEffect, useState } from "react";
import CreateServerModal from "../ui/modals/create-server-modal";
import InviteModal from "../ui/modals/invite-modal";
import EditServerModal from "../ui/modals/edit-server-modal";
import MembersModal from "../ui/modals/members-modal";
import CreateChannelModal from "../ui/modals/create-channel-modal";
import LeaveServerModal from "../ui/modals/leave-server-modal";
import DeleteServerModal from "../ui/modals/delete-server-modal";
import DeleteChannelModal from "../ui/modals/delete-channel-modal";
import EditChannelModal from "../ui/modals/edit-channel-modal";
import MessageFileModal from "../ui/modals/message-file-modal";
import DeleteMessageModal from "../ui/modals/delete-message-modal";

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
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
};
