import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/Layout/layout";
import UserDashBoard from "../components/User/userDashBoard";
export default function UserProfile() {
  return (
    <Fragment>
      <Layout>
        <UserDashBoard />
      </Layout>
    </Fragment>
  );
}
