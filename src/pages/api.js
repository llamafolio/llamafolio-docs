import React from "react";
import Layout from "@theme/Layout";
import Swagger from "../components/swagger";

export default function Page() {
  return (
    <Layout title="LlamaFolio docs">
      <main>
        <Swagger />
      </main>
    </Layout>
  );
}
