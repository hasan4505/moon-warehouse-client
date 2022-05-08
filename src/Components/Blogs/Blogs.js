import React from "react";

const Blogs = () => {
  return (
    <div className="card p-3 m-5 bg-body rounded">
      <div className="card  shadow-lg p-3 mb-5 bg-body rounded">
        <h3>What is the difference between javascript and nodejs?</h3>
        <h6>1. NodeJS : </h6>
        <p>
          Node JS is an interpreter or running environment for a JavaScript
          programming language that holds many excesses. Nodejs allows
          Javascript code to run outside the browser. It is utilised on the web
          page’s client-side.
        </p>

        <h6>2. JavaScript : </h6>
        <p>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. NodeJS helps us run JS outside the browser as well.
          It lets us use JS on the server-side as well since it works on the
          server-side.
        </p>
      </div>
      <div className="card  shadow-lg p-3 mb-5 bg-body rounded">
        <h3>When should you use nodejs and when should you use mongodb?</h3>
        <p>
          MongoDB is the Document Oriented Database. MongoDB stores a lot of
          data in JSON format. MongoDB's performance is much faster than any
          RDBMS(Relational Database Management System. Like SQL, MS SQL Server,
          ORACLE, My-SQL, and Microsoft Access are based on RDBMS.). MongoDB is
          designed to work with Large Scale Data and can work on multiple
          servers. MongoDB can handle a large number of access requests easily.
          There are 2 design patterns in programming. One is asynchronous
          programming and the other is synchronous programming. Node JS by
          default follows the Asynchronous pattern. That is, it does not wait
          for a task to be completed. In the meantime, NodeJS started another
          job. That’s why we use nodeJS.
        </p>
      </div>
      <div className="card  shadow-lg p-3 mb-5 bg-body rounded">
        <h3>What is the differences between sql and nosql databases?</h3>
        <p>
          1. SQL databases are relational, tabular data, with rules about
          consistency and integrity, while NoSQL databases are non-relational.
          <br />
          2. SQL databases are Vertically Scalable, NoSQL databases are
          Horizontally scalable. <br />
          3. SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores. <br />
          4. SQL databases follows ACID property, NoSQL databases follows
          CAP(consistency, availability, partition tolerance).
        </p>
        <br />
      </div>
      <div className="card  shadow-lg p-3 mb-5 bg-body rounded">
        <h3>What is the purpose of jwt and how does it work?</h3>
        <p>
          JWT (JSON Web Token) is an open standard used to share security
          information between two parties a client and a server. <br />
          <span>
            <b>It works this way: </b>
          </span>
          the server generates a token that certifies the user identity and then
          sends it to the client. The client will send the token back to the
          server for every subsequent request, so the server knows the request
          comes from a particular identity.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
