import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import medium from "../../images/medium_crop.png";

const Lessons = () => {
  return (
    <>
      <div className="column side"></div>
      <div className="column middle">
        <div className="inside normal">
          <span className="heading">First Blog Post</span>
          <br />
          <span className="blogdate">March 16, 2023</span> <a href="https://medium.com/@harishsa85/my-first-post-2fcf04d90a34" target="_blank">
          <img
            src={medium}
            alt="Description of the image"
            className="mediumimage"
          />
          <span className="medium">Read on Medium</span></a>
          <br />
          <p className="blogtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sollicitudin mauris at sapien aliquet malesuada. In molestie ipsum
            nisi, in rhoncus sapien rhoncus a. Quisque neque orci, ullamcorper
            at dapibus ut, consequat vel neque. Curabitur ac aliquet arcu.
            Integer et mi hendrerit velit pharetra aliquet nec sit amet sem. In
            sed purus vel augue semper cursus ac non nisl. Nullam vel nunc a
            felis suscipit mollis. Suspendisse lacinia massa mi, sit amet
            aliquet tellus posuere sit amet. Praesent imperdiet, arcu varius
            semper dignissim, nunc lorem suscipit felis, vitae ullamcorper elit
            metus id orci. Cras sed facilisis ipsum. In hac habitasse platea
            dictumst. Nam turpis diam, finibus eget egestas eget, gravida nec
            erat. Morbi auctor ex quis tortor porta luctus. Praesent sed
            ultricies lacus, blandit finibus nunc. Pellentesque eu suscipit dui.
          </p>

          <p className="blogtext">
            Nulla lacus dui, luctus sit amet metus sit amet, imperdiet sodales
            neque. Donec id velit pretium, varius lectus eu, convallis sem.
            Integer laoreet lacus nec lacus mollis ultrices a nec nulla. Donec
            ac nisl in neque tincidunt molestie dictum nec massa. Sed ut egestas
            libero, in sollicitudin nibh. Vestibulum eu magna sed mauris
            convallis ultricies nec euismod ante. Proin tempus mi quis turpis
            condimentum ultrices. Vestibulum id nunc nisi. Nullam varius dui ac
            enim dignissim porta. Aliquam eget vulputate nunc, sit amet rutrum
            arcu.
          </p>
          <p className="blogtext">
            Sed scelerisque viverra venenatis. Sed ut tortor velit. Donec nec
            laoreet erat. Nulla sit amet est fermentum, ullamcorper orci ac,
            semper turpis. Quisque laoreet tortor nec justo ornare, et
            scelerisque risus feugiat. Maecenas eu tincidunt nisl. Aenean sit
            amet justo urna. Cras non quam dictum, pulvinar ex ut, semper neque.
            Mauris sollicitudin elementum erat ac egestas. Nulla gravida nisl
            vel nisl varius dictum. Morbi bibendum eget mi vel hendrerit.
            Aliquam erat volutpat. Quisque luctus tortor at erat imperdiet
            efficitur. Pellentesque in est vitae enim semper facilisis ac ut
            libero. Donec hendrerit interdum sem sit amet aliquam. Duis
            venenatis elit orci, at sodales velit mollis sed.
          </p>
          <p className="blogtext">
            In ut ligula sed lorem efficitur faucibus. Curabitur molestie eros
            vel tincidunt congue. Cras congue ipsum neque, et varius massa
            consectetur eu. Pellentesque posuere turpis eu tristique tristique.
            Vivamus rhoncus blandit viverra. Fusce lacinia fringilla lorem, at
            pretium dolor. Quisque erat magna, tempus vitae mattis quis, mattis
            sed dui. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Fusce pharetra lectus leo, eget sodales lorem fringilla
            nec. Pellentesque porttitor lorem sed justo fringilla molestie. In
            sed leo eget nibh volutpat lacinia ac et lacus. Proin egestas ligula
            sed fermentum feugiat. Praesent nec magna consequat, dictum nisl
            quis, auctor libero. Aenean ac neque in quam dignissim iaculis.
            Proin sit amet posuere justo.
          </p>
          <p className="blogtext">
            Vestibulum pharetra ac sapien ac posuere. Fusce a risus efficitur,
            feugiat leo accumsan, mollis purus. Duis luctus, dolor ac
            sollicitudin finibus, lorem augue venenatis diam, eu mollis purus
            urna id dolor. Suspendisse sagittis est mauris, eget volutpat metus
            egestas nec. Nunc nibh neque, tristique sed accumsan sit amet,
            bibendum et lorem. Donec ut luctus ligula. Pellentesque eu nulla vel
            nunc commodo pharetra sed eu ipsum. Nunc interdum dictum ex, a
            egestas lectus volutpat at.
          </p>
        </div>
      </div>

      <div className="column side"></div>
    </>
  );
};

export default Lessons;
