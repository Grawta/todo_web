import React from "react";



export type AppBodyProps = {
  header: string;
  quote?: string;
  Test: React.ReactNode;
};

const AppBody: React.FC<AppBodyProps> = (AppBodyProp) => (
  <section className="app-body">
    <section className="body-content">
      <h2>{AppBodyProp.header}</h2>
      {AppBodyProp.quote && <blockquote>{AppBodyProp.quote}</blockquote>}
    </section>
    {AppBodyProp.Test}
    {AppBodyProp.children}
  </section>

);

export default AppBody;
