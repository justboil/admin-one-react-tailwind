"use client";

import React, { ReactNode } from "react";
import { useState } from "react";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import menuAside from "./_lib/menuAside";
import menuNavBar from "./_lib/menuNavBar";
import Icon from "../_components/Icon";
import NavBar from "./_components/NavBar";
import NavBarItemPlain from "./_components/NavBar/Item/Plain";
import AsideMenu from "./_components/AsideMenu";
import FooterBar from "./_components/FooterBar";
import FormField from "../_components/FormField";
import { Field, Form, Formik } from "formik";

type Props = {
  children: ReactNode;
};

export default function LayoutAuthenticated({ children }: Props) {
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);
  const [isAsideLgActive, setIsAsideLgActive] = useState(false);

  const handleRouteChange = () => {
    setIsAsideMobileExpanded(false);
    setIsAsideLgActive(false);
  };

  const layoutAsidePadding = "xl:pl-60";

  return (
    <div className={`overflow-hidden lg:overflow-visible`}>
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""
        } min-h-screen w-screen bg-gray-50 pt-14 transition-(--transition-position) lg:w-auto dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${isAsideMobileExpanded ? "ml-60 lg:ml-0" : ""}`}
        >
          <NavBarItemPlain
            display="flex lg:hidden"
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <Icon path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            onClick={() => setIsAsideLgActive(true)}
          >
            <Icon path={mdiMenu} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain useMargin>
            <Formik
              initialValues={{
                search: "",
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormField isBorderless isTransparent>
                  {({ className }) => (
                    <Field name="search" placeholder="Search" className={className} />
                  )}
                </FormField>
              </Form>
            </Formik>
          </NavBarItemPlain>
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
          onRouteChange={handleRouteChange}
        />
        {children}
        <FooterBar>
          Get more with{` `}
          <a
            href="https://tailwind-react.justboil.me/dashboard"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            Premium version
          </a>
        </FooterBar>
      </div>
    </div>
  );
}
