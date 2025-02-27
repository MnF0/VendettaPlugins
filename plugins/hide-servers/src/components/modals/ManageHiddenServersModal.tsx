import { Modal } from "../../../../../stuff/types";
import { ManageDataPage } from "../pages/ManageHiddenServers";

export default function () {
  return (
    <Modal mkey="MANAGE_HIDDEN_SERVERS" title="Manage Hidden Servers">
      <ManageDataPage />
    </Modal>
  );
}
