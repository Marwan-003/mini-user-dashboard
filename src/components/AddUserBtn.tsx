import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useAppDispatch } from "../features/hooks";
import { addUser, type user } from "../features/users/userSlice";

function AddUserBtn() {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ name: "", email: "", city: "", phone: "" });
  };

  // handle every change of the input dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // sending the input to the store 
  const handleSubmit = () => {
    const newUser: user = {
      id: Date.now(),
      name: formData.name,
      username: formData.name.toLowerCase().replace(/\s+/g, "_"),
      email: formData.email,
      address: {
        street: "",
        suite: "",
        city: formData.city,
        zipcode: "",
        geo: { lat: "0", lng: "0" },
      },
      phone: formData.phone,
      website: "",
      company: { name: "", catchPhrase: "", bs: "" },
    };

    dispatch(addUser(newUser));
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add User
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth slotProps={{
    paper: {
      sx: {
        borderRadius: "1rem",
        paddingBlock: "1rem",
      },
    },
  }}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent  sx={{ display: "flex", flexDirection: "column", gap: 2, paddingBlock:"1rem" , '&.MuiDialogContent-root':{paddingTop:"1rem"} }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email || !formData.city || !formData.phone}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddUserBtn;
