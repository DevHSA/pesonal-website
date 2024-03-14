import React from "react";
import myImage from "../images/Harish_HighResolution.jpg";

const Home = () => {
  return (
    <>
      <div className="column side">
        {/* <h2>Side</h2> */}
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
      </div>

      <div className="column middle">
        <div className="inside normal">
          <span className="heading">Harish S A</span>
          <br />
          Ph.D. Student @ Indian Institute of Technology Hyderabad, India <br />
          <a href="https://www.pmrf.in/" target="_blank" className="txtlink">
            Prime Ministers Research Fellow (PMRF)
          </a>{" "}
          &
          <a
            href="https://www.usief.org.in/Fulbright-Nehru-Doctoral-Research-Fellowships.aspx"
            target="_blank"
            className="txtlink"
          >
            {" "}
            Fulbright Doctoral Research Fellow
          </a>
        </div>
        <div className="inside left">
          <p>
            I am a 3rd year Ph.D. scholar and Teaching Assistant at the
            Department of Computer Science and Engineering,{" "}
            <a
              href="https://www.iith.ac.in/"
              target="_blank"
              className="txtlink"
            >
              Indian Institute of Technology Hyderabad
            </a>
            . I am currently a part of the{" "}
            <a
              href="https://www.netxiith.in/"
              target="_blank"
              className="txtlink"
            >
              NETX group
            </a>{" "}
            under the guidance of{" "}
            <a
              href="https://praveenabt.github.io/"
              target="_blank"
              className="txtlink"
            >
              Dr. Praveen Tammana
            </a>
            . The broader domains that encompass my research interests include
            Networks, Systems, and Security. My current research explores the
            security implications of in-network systems that leverage
            cutting-edge technologies like{" "}
            <a
              href="https://en.wikipedia.org/wiki/Software-defined_networking"
              target="_blank"
              className="txtlink"
            >
              Software-Defined Networks
            </a>{" "}
            and programmable data planes. My vision is to bolster the resilience
            of next-generation computer networks against security threats.
          </p>
          {/* <p>
            The advent of programmable networks has opened up many exciting
            opportunities to address network security. More specifically, our
            research aims to extend in-network security capabilities using
            emerging technologies like P4 and programmable data planes. The key
            questions we address are: (1) How to reduce overheads involved in
            securing a large enterprise or home-based IoT network? (2) How to
            defend against targeted attacks on systems built using programmable
            data planes?
            <br />
            <br />
            To this end, we propose to (1) build a scalable in-network system to
            secure an extensive IoT network and (2) study the vulnerabilities of
            existing in-network programmable data plane-dependent systems and
            build holistic detection and defense mechanisms. We use
            P4-compatible network hardware like switches and smartNICs to
            enforce security for IoT devices and in-network systems.
          </p> */}
        </div>
        <div className="inside right">
          <img
            src={myImage}
            alt="Description of the image"
            className="imagesize"
          />
        </div>

        <div className="inside normal">
          <span className="heading">Updates</span>
          <table className="tablestyle">
            <tr>
              <td className="tcolone">
                <b>Mar 2024</b>
              </td>
              <td className="tcoltwo">
                Won the final approval for the{" "}
                <a
                  href="https://www.usief.org.in/Fulbright-Nehru-Doctoral-Research-Fellowships.aspx"
                  target="_blank"
                  className="txtlink"
                >
                  Fulbright-Nehru Doctoral Research Fellowship
                </a>
                . Excited to join the{" "}
                <a
                  href="https://utns.cs.utexas.edu/"
                  target="_blank"
                  className="txtlink"
                >
                  UT Networked Systems lab
                </a>{" "}
                at{" "}
                <a
                  href="https://www.utexas.edu/"
                  target="_blank"
                  className="txtlink"
                >
                  University of Texas at Austin
                </a>{" "}
                from August 2024 for a period of 9 months.
              </td>
            </tr>

            <tr>
              <td className="tcolone">
                <b>Feb 2024</b>
              </td>
              <td className="tcoltwo">
                {" "}
                Invited to attend the{" "}
                <a
                  href="https://www.pmrf.in/symposium-2024"
                  target="_blank"
                  className="txtlink"
                >
                  PMRF Annual Symposium
                </a>{" "}
                at IIT Indore.
              </td>
            </tr>

            <tr>
              <td className="tcolone">
                <b>Nov 2023</b>
              </td>
              <td className="tcoltwo">
                Recommended as a principal candidate to the{" "}
                <a
                  href="https://www.usief.org.in/Fulbright-Nehru-Doctoral-Research-Fellowships.aspx"
                  target="_blank"
                  className="txtlink"
                >
                  Fulbright-Nehru Doctoral Research Fellowship
                </a>
                .
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>June 2023</b>
              </td>
              <td className="tcoltwo">
                Presented our work "
                <a
                  href="https://dl.acm.org/doi/10.1145/3600061.3600086"
                  target="_blank"
                  className="txtlink"
                >
                  In-Network Probabilistic Monitoring Primitives under the
                  Influence of Adversarial Network Inputs
                </a>
                " at{" "}
                <a
                  href="https://conferences.sigcomm.org/events/apnet2023/"
                  target="_blank"
                  className="txtlink"
                >
                  APNET 2023
                </a>
                , Hong Kong SAR.{" "}
                <a
                  href="https://dl.acm.org/doi/10.1145/3600061.3600086"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <a
                  href="https://conferences.sigcomm.org/events/apnet2023/slides/apnet23/Session5/Harish_APNET_23.pdf"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[slides]</b>
                </a>{" "}
                <a
                  href="https://conferences.sigcomm.org/events/apnet2023/videos/session5-innet.mp4"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[talk]</b>
                </a>
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>June 2023</b>
              </td>
              <td className="tcoltwo">
                Recieved the top grade "Recommended with Commendation" in the
                annual PMRF Review 2023.
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>May 2023</b>
              </td>
              <td className="tcoltwo">
                Presented our work "
                <a
                  href="https://ieeexplore.ieee.org/document/10154376"
                  target="_blank"
                  className="txtlink"
                >
                  Scaling IoT MUD Enforcement using Programmable Data Planes
                </a>
                " at{" "}
                <a
                  href="https://noms2023.ieee-noms.org/program/technical-sessions"
                  target="_blank"
                  className="txtlink"
                >
                  IEEE/IFIP Network Operations and Management Symposium 2023
                  (NOMS 23)
                </a>
                , Miami, Florida, USA.{" "}
                <a
                  href="https://ieeexplore.ieee.org/document/10154376"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[paper]</b>
                </a>
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>April 2023</b>
              </td>
              <td className="tcoltwo">
                Our work "In-Network Probabilistic Monitoring Primitives under
                the Influence of Adversarial Network Inputs" accepted at the{" "}
                <a
                  href="https://conferences.sigcomm.org/events/apnet2023/"
                  target="_blank"
                  className="txtlink"
                >
                  7th Asia-Pacific Workshop on Networking (APNET 2023)
                </a>
                , Hong Kong SAR.
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>Feb 2023</b>
              </td>
              <td className="tcoltwo">
                Won the IEEE/IFIP NOMS 2023{" "}
                <a
                  href="https://noms2023.ieee-noms.org/hotel-travel/student-travel-grants"
                  target="_blank"
                  className="txtlink"
                >
                  ComSoc student travel grant
                </a>
                .
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>Dec 2022</b>
              </td>
              <td className="tcoltwo">
                Our work "Scaling IoT MUD Enforcement using Programmable Data
                Planes" accepted at{" "}
                <a
                  href="https://noms2023.ieee-noms.org/"
                  target="_blank"
                  className="txtlink"
                >
                  IEEE/IFIP Network Operations and Management Symposium 2023
                  (NOMS 23)
                </a>
                , Miami, Florida, USA.
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>Aug 2022</b>
              </td>
              <td className="tcoltwo">
                Recieved the{" "}
                <a
                  href="https://www.pmrf.in/"
                  target="_blank"
                  className="txtlink"
                >
                  Prime Ministers Research Fellow (PMRF){" "}
                </a>{" "}
                !
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>Aug 2022</b>
              </td>
              <td className="tcoltwo">
                Presented our work "
                <a
                  href="https://doi.org/10.1145/3528082.3544832"
                  target="_blank"
                  className="txtlink"
                >
                  IoT MUD Enforcement in the Edge Cloud using Programmable
                  Switch
                </a>
                " at the{" "}
                <a
                  href="https://conferences.sigcomm.org/sigcomm/2022/workshop-ffspin.html"
                  target="_blank"
                  className="txtlink"
                >
                  FFSPIN Workshop 2023
                </a>{" "}
                as part of{" "}
                <a
                  href="https://conferences.sigcomm.org/sigcomm/2022/"
                  target="_blank"
                  className="txtlink"
                >
                  ACM SIGCOMM '22
                </a>
                , Amsterdam, Netherlands.{" "}
                <a
                  href="https://doi.org/10.1145/3528082.3544832"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>July 2022</b>
              </td>
              <td className="tcoltwo">
                Won the ACM SIGCOMM 2022{" "}
                <a
                  href="https://conferences.sigcomm.org/sigcomm/2022/travel-grants.html"
                  target="_blank"
                  className="txtlink"
                >
                  Student Travel Grant
                </a>{" "}
                award.
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>June 2022</b>
              </td>
              <td className="tcoltwo">
                Our work "IoT MUD Enforcement in the Edge Cloud using
                Programmable Switch" accepted at the{" "}
                <a
                  href="https://conferences.sigcomm.org/sigcomm/2022/workshop-ffspin.html"
                  target="_blank"
                  className="txtlink"
                >
                  FFSPIN Workshop 2023
                </a>{" "}
                as part of{" "}
                <a
                  href="https://conferences.sigcomm.org/sigcomm/2022/"
                  target="_blank"
                  className="txtlink"
                >
                  ACM SIGCOMM '22
                </a>
                , Amsterdam, Netherlands.
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>June 2022</b>
              </td>
              <td className="tcoltwo">
                Undertaking a 1 month student exchange program as part of the{" "}
                <a
                  href="https://www.aistic.gov.in/ASEAN/HomePage"
                  target="_blank"
                  className="txtlink"
                >
                  ASEAN Initiative
                </a>{" "}
                at{" "}
                <a
                  href="https://filkom.ub.ac.id/"
                  target="_blank"
                  className="txtlink"
                >
                  FILKOM Brawijaya University
                </a>
                , Indonesia!
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>June 2022</b>
              </td>
              <td className="tcoltwo">
                Presented our work in progress "P4 Programmable Data Plane based MUD
                Enforcement for IoT Security" at the Graduate Forum of <a
                  href="https://perfna2022.cse.iith.ac.in/"
                  target="_blank"
                  className="txtlink"
                >PerfNA Workshop
                2022</a> at <a
                  href="https://www.sigmetrics.org/sigmetrics2022/"
                  target="_blank"
                  className="txtlink"
                >ACM SIGMETRICS 2022</a> 
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>May 2022</b>
              </td>
              <td className="tcoltwo">
                Won the <a
                  href="https://www.sigmetrics.org/sigmetrics2022/student_grants.html"
                  target="_blank"
                  className="txtlink"
                >Student Grant</a> of <a
                href="https://www.sigmetrics.org/sigmetrics2022/"
                target="_blank"
                className="txtlink"
              >ACM SIGMETRICS 2022</a>!
                
              </td>
            </tr>
            <tr>
              <td className="tcolone">
                <b>Dec 2021</b>
              </td>
              <td className="tcoltwo">
                Won the <a
                href="https://www.comsnets.org/archive/2022/travel_grants.html"
                target="_blank"
                className="txtlink"
              >COMSNETS 2022 Travel Grant</a> award!
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="column side">
        {/* <h2>Side</h2> */}
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p> */}
      </div>
    </>
  );
};

export default Home;
