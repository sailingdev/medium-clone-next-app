import React, { useState } from "react";
import Image from "next/image";

import Button from "../../_ui/Button";
import Input from "../../_ui/Input";
import PhoneInputField from "../../_ui/PhoneInput";
import styles from "./styles.module.scss";
import userAvatar from "../../../assets/image/person.png";
import { useForm } from "react-hook-form";
import axios from "../../../utils/functions/axios";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { authSelector, profileUpdate } from "../../../store/Auth";

const ProfilePage: React.FC = () => {
  const { userData } = useAppSelector(authSelector);
  const [image, setImage] = useState<string>();
  const dispatch = useAppDispatch();
  const { register, control, handleSubmit } = useForm();

  console.log("userData1: ", userData);

  const handleChange = async (e: any) => {
    try {
      setImage(undefined);
      const formData = new FormData();
      formData.append("directory", "avatar");
      formData.append("file", e.target.files[0]);
      const response = await axios(true).post(
        `${process.env.NEXT_PUBLIC_API_URL}/file/upload`,
        formData
      );
      const url = response.data.path;
      console.log("url: ", url);
      setImage(response.data.path);
      console.log("response.data.path: ", response.data.path);
    } catch (error: any) {
      throw error?.response?.data ?? error.message;
    }
  };
  console.log("Image: ", image);
  const onSubmit = async (data: any) => {
    data.avatar = image;
    console.log("data: ", data);

    dispatch(profileUpdate(data));
  };
  return (
    <div>
      {userData && (
        <form className={styles.divide} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapper}>
            <div>
              <h2 className={styles.title}>Profile</h2>
              <p className={styles.text}>
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>

            <div className={styles.imageWrapper}>
              <p className={styles.imageLabel}>Photo</p>
              <div className={styles.phoneImageWrapper}>
                <div className={styles.phoneImage}>
                  <div className={styles.avatarWrapper}>
                    <Image
                      width={12}
                      height={12}
                      className={styles.avatar}
                      src={userData.avatar ?? userAvatar}
                      alt=""
                    />
                  </div>

                  <div className={styles.toolWrapper}>
                    <div className={styles.labelWrapper}>
                      <label htmlFor="mobile-user-photo" className={styles.label}>
                        <span>Change</span>
                      </label>
                      <input
                        id="mobile-user-photo"
                        type="file"
                        name="avatar"
                        className={styles.input}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.desktopImageWrapper}>
                <Image
                  className={styles.image}
                  src={image ?? userData.avatar ?? userAvatar}
                  alt=""
                  width={160}
                  height={160}
                />
                <label htmlFor="desktop-user-photo" className={styles.label}>
                  <span>Change</span>
                  <input
                    type="file"
                    name="avatar"
                    id="desktop-user-photo"
                    className={styles.input}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6 desktop:grid-cols-2">
              <Input
                type="text"
                name="firstname"
                label="First name"
                inputStyle="profile"
                register={register("firstname")}
                defaultValue={userData.firstname}
              />

              <Input
                type="text"
                name="lastname"
                label="Last name"
                inputStyle="profile"
                register={register("lastname")}
                defaultValue={userData.lastname}
              />

              <div className="col-span-2">
                <Input
                  type="email"
                  name="email"
                  label="Email address"
                  inputStyle="profile"
                  register={register("email")}
                  defaultValue={userData.email}
                />
              </div>

              <PhoneInputField
                name="phone"
                control={control}
                label="Phone number"
                inputStyle="profile"
                defaultValue={userData.phone}
              />
            </div>
          </div>

          <div className="flex justify-end px-4 py-4 space-x-4">
            <Button type="submit" buttonStyle="profile">
              Save
            </Button>
            <Button buttonStyle="white">Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
