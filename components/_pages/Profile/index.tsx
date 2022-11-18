import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import classNames from "classnames";
import userAvatar from "../../../assets/image/person.png";
import Image from "next/image";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
};

const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
];

const ProfilePage: React.FC = () => {
  const [availableToHire, setAvailableToHire] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [allowCommenting, setAllowCommenting] = useState(true);
  const [allowMentions, setAllowMentions] = useState(true);
  return (
    <div>
      <div className="pb-32 bg-sky-800">
        <header className="relative py-40">
          <div className="px-4 mx-auto max-w-screen-large phone:px-6 desktop:px-8">
            <h1 className="p-0 m-0 font-bold tracking-tight text-white text-30">
              Settings
            </h1>
          </div>
        </header>
      </div>

      <main className="relative -mt-32">
        <div className="max-w-screen-large px-4 pb-6 mx-auto phone:px-6 desktop:px-8 desktop:pb-[64px]">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="divide-y divide-gray-200 desktop:grid desktop:grid-cols-12 desktop:divide-y-0 desktop:divide-x">
              <aside className="py-6 desktop:col-span-3">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                          : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                        "group border-l-4 px-3 py-2 flex items-center text-14 font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-teal-500 group-hover:text-teal-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </aside>

              <form
                className="divide-y divide-gray-200 desktop:col-span-9"
                action="#"
                method="POST"
              >
                {/* Profile section */}
                <div className="px-4 py-6 phone:p-6 desktop:pb-8">
                  <div>
                    <h2 className="m-0 font-medium leading-6 text-gray-900 text-18">
                      Profile
                    </h2>
                    <p className="mt-1 text-gray-500 text-14">
                      This information will be displayed publicly so be careful what you
                      share.
                    </p>
                  </div>

                  <div className="flex flex-col mt-6 desktop:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label
                          htmlFor="username"
                          className="block font-medium text-gray-700 text-14"
                        >
                          Username
                        </label>
                        <div className="flex mt-1 rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 phone:text-14">
                            workcation.com/
                          </span>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="flex-grow block w-full min-w-0 border-gray-300 rounded-none rounded-r-md focus:border-sky-500 focus:ring-sky-500 phone:text-14"
                            defaultValue={user.handle}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="about"
                          className="block font-medium text-gray-700 text-14"
                        >
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:ring-sky-500 phone:text-14"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-2 text-gray-500 text-14">
                          Brief description for your profile. URLs are hyperlinked.
                        </p>
                      </div>
                    </div>

                    <div className="flex-grow mt-6 desktop:mt-0 desktop:ml-6 desktop:flex-shrink-0 desktop:flex-grow-0">
                      <p className="font-medium text-gray-700 text-14" aria-hidden="true">
                        Photo
                      </p>
                      <div className="mt-1 desktop:hidden">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 inline-block w-12 h-12 overflow-hidden rounded-full"
                            aria-hidden="true"
                          >
                            <Image
                              width={12}
                              height={12}
                              className="w-full h-full rounded-full"
                              src={userAvatar}
                              alt=""
                            />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="relative flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md group focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                              <label
                                htmlFor="mobile-user-photo"
                                className="relative font-medium leading-4 text-gray-700 pointer-events-none text-14"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="mobile-user-photo"
                                name="user-photo"
                                type="file"
                                className="absolute w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden overflow-hidden rounded-full desktop:block">
                        <Image
                          className="relative rounded-full w-160 h-160"
                          src={userAvatar}
                          alt=""
                          width={160}
                          height={160}
                        />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex items-center justify-center w-full h-full font-medium text-white bg-black bg-opacity-75 opacity-0 text-14 focus-within:opacity-100 hover:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 mt-6">
                    <div className="col-span-12 phone:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block font-medium text-gray-700 text-14"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 phone:text-14"
                      />
                    </div>

                    <div className="col-span-12 phone:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block font-medium text-gray-700 text-14"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 phone:text-14"
                      />
                    </div>

                    <div className="col-span-12">
                      <label
                        htmlFor="url"
                        className="block font-medium text-gray-700 text-14"
                      >
                        URL
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 phone:text-14"
                      />
                    </div>

                    <div className="col-span-12 phone:col-span-6">
                      <label
                        htmlFor="company"
                        className="block font-medium text-gray-700 text-14"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 phone:text-14"
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy section */}
                <div className="pt-6 divide-y divide-gray-200">
                  <div className="px-4 phone:px-6">
                    <div>
                      <h2 className="m-0 font-medium text-gray-900 text-18">Privacy</h2>
                      <p className="mt-1 text-gray-500 text-14">
                        Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                      </p>
                    </div>
                    <ul role="list" className="mt-2 divide-y divide-gray-200">
                      <Switch.Group
                        as="li"
                        className="flex items-center justify-between py-4"
                      >
                        <div className="flex flex-col">
                          <Switch.Label
                            as="p"
                            className="font-medium text-gray-900 text-14"
                            passive
                          >
                            Available to hire
                          </Switch.Label>
                          <Switch.Description className="text-gray-500 text-14">
                            Nulla amet tempus sit accumsan. Aliquet turpis sed sit
                            lacinia.
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={availableToHire}
                          onChange={setAvailableToHire}
                          className={classNames(
                            availableToHire ? "bg-teal-500" : "bg-gray-200",
                            "relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              availableToHire ? "translate-x-20" : "translate-x-0",
                              "inline-block h-20 w-20 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group
                        as="li"
                        className="flex items-center justify-between py-4"
                      >
                        <div className="flex flex-col">
                          <Switch.Label
                            as="p"
                            className="font-medium text-gray-900 text-14"
                            passive
                          >
                            Make account private
                          </Switch.Label>
                          <Switch.Description className="text-gray-500 text-14">
                            Pharetra morbi dui mi mattis tellus sollicitudin cursus
                            pharetra.
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={privateAccount}
                          onChange={setPrivateAccount}
                          className={classNames(
                            privateAccount ? "bg-teal-500" : "bg-gray-200",
                            "relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              privateAccount ? "translate-x-20" : "translate-x-0",
                              "inline-block h-20 w-20 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group
                        as="li"
                        className="flex items-center justify-between py-4"
                      >
                        <div className="flex flex-col">
                          <Switch.Label
                            as="p"
                            className="font-medium text-gray-900 text-14"
                            passive
                          >
                            Allow commenting
                          </Switch.Label>
                          <Switch.Description className="text-gray-500 text-14">
                            Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={allowCommenting}
                          onChange={setAllowCommenting}
                          className={classNames(
                            allowCommenting ? "bg-teal-500" : "bg-gray-200",
                            "relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              allowCommenting ? "translate-x-20" : "translate-x-0",
                              "inline-block h-20 w-20 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group
                        as="li"
                        className="flex items-center justify-between py-4"
                      >
                        <div className="flex flex-col">
                          <Switch.Label
                            as="p"
                            className="font-medium text-gray-900 text-14"
                            passive
                          >
                            allowMentions
                          </Switch.Label>
                          <Switch.Description className="text-gray-500 text-14">
                            Adipiscing est venenatis enim molestie commodo eu gravid
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={allowMentions}
                          onChange={setAllowMentions}
                          className={classNames(
                            allowMentions ? "bg-teal-500" : "bg-gray-200",
                            "relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              allowMentions ? "translate-x-20" : "translate-x-0",
                              "inline-block h-20 w-20 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                    </ul>
                  </div>
                  <div className="flex justify-end px-4 py-4 mt-4 phone:px-6">
                    <button
                      type="button"
                      className="inline-flex justify-center px-16 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm text-14 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center px-16 py-2 ml-20 font-medium text-white border border-transparent rounded-md shadow-sm text-14 bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
