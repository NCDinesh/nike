import React from "react";
import {
  Hero,
  Footer,
  CustomerReviews,
  Services,
  Superquality,
  Popular,
  Subscribe,
  Special,
} from "./section";
import Navbar from "./components/Navbar";

const App = () => (
  <main className="relative">
    <Navbar> </Navbar>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero></Hero>
    </section>

    <section className="padding">
      <Popular> </Popular>
    </section>

    <section className="padding">
      <Superquality></Superquality>
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      {" "}
      <Special />{" "}
    </section>
    <section className="bg-pale-blue padding ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
