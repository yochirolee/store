import { Fragment } from "react";
import HomeRight from "../components/Home/Right/homeRight";
import HomeLeft from "../components/Home/Left/homeLeft";
import { SelectedModelProvider } from "../context/selectedModelContext";
import Layout from "../components/Layout/layout";
export default function PublishPhone() {
  return (
    <Fragment>
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center h-almost sm:w-full md:w-4/6 mx-auto ">
          <SelectedModelProvider>
            <HomeLeft />
            <HomeRight />
          </SelectedModelProvider>
        </div>
      </Layout>
    </Fragment>
  );
}
