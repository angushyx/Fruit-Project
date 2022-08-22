import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ShippingForm from "../ShippingForm";
import Dialog from "@mui/material/Dialog";
import React from "react";

export default function FormDialog(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Edit your address</DialogTitle>
        <DialogContent>
          <ShippingForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
