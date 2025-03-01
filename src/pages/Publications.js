import React from "react";
import ifip from "../images/2024ifip.jpg";
import comsnets from "../images/2024comsnets.jpg";
import apnet from "../images/2023apnet.jpg";
import noms from "../images/2023noms.jpg";
import ffspin from "../images/2022ffspin.jpg";
import rpe from "../images/2021rpe.jpg";
import iccci from "../images/2019iccci.jpg";
import icicct from "../images/2019icicct.jpg";



const Publications = () => {
  return (
    <>
      <div className="column side"></div>
      <div className="column middle">
        <div className="inside normal">
          <span className="heading">Publications</span>
          <br />
          Publications in reverse chronological order
          <br />
          <br />

          {/* 2024 */}
          <span className="heading">2024</span>
          <hr />
          <table className="pubtablestyle">
          <tr>
              <td className="pubtcolone">
                <img src={comsnets} alt="COMSNETS 2024" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                Securing In-Network Fast Control Loop Systems from Adversarial Attacks
                </span>
                <br />
                <span className="pubauth">
                  <span style={{ textDecoration: "underline" }}>
                    Harish S A
                  </span>
                  , Divya Pathak, Mahanth Kumar Valluri, Sree Prathyush Chinta, Amogh Bedarakota, Rinku Shah, Praveen Tammana
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://www.comsoc.org/conferences-events/international-conference-communication-systems-networks-2024"
                    target="_blank"
                    className="txtlink"
                  >
                    16th International Conference on COMmunication Systems & NETworkS (COMSNETS), Bengaluru, India
                  </a>
                </span>
                <br /> <br />
                <a
                  href="https://ieeexplore.ieee.org/document/10427291"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <b>[slides]</b> <b>[talk]</b>
              </td>
            </tr>

            <tr>
              <td className="pubtcolone">
                <img src={ifip} alt="COMSNETS 2024" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                Anamoly Detection in In-Network Fast ReRoute Systems
                </span>
                <br />
                <span className="pubauth">
                Divya Pathak, <span style={{ textDecoration: "underline" }}>Harish SA</span>, Sree Prathyush Chinta, Dilip Kumar Reddy, Praveen Tammana
                
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://networking.ifip.org/2024/"
                    target="_blank"
                    className="txtlink"
                  >
                    23rd International Federation for Information Processing Networking Conference (IFIP/IEEE Networking 2024), Thessaloniki, Greece
                  </a>
                </span>
                <br /> <br />
                <a
                  href="https://doi.org/10.23919/IFIPNetworking62109.2024.10619865"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <b>[slides]</b> <b>[talk]</b>
              </td>
            </tr>
          </table>



          {/* 2023 */}
          <span className="heading">2023</span>
          <hr />
          <table className="pubtablestyle">
            <tr>
              <td className="pubtcolone">
                <img src={apnet} alt="APNET 2023" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                  In-Network Probabilistic Monitoring Primitives under the
                  Influence of Adversarial Network Inputs
                </span>
                <br />
                <span className="pubauth">
                  <span style={{ textDecoration: "underline" }}>
                    Harish S A*
                  </span>
                  , K Shiv Kumar*, Anibrata Majee, Amogh Bedarakota, Praveen
                  Tammana, Pravein Govindan Kannan & Rinku Shah
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://conferences.sigcomm.org/events/apnet2023/"
                    target="_blank"
                    className="txtlink"
                  >
                    7th Asia-Pacific Workshop on Networking (APNET 2023), Hong
                    Kong SAR
                  </a>
                </span>
                <br /> <br />
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

            {/* ROW TWO */}
            <tr>
              <td className="pubtcolone">
                <img src={noms} alt="NOMS 2023" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                  Scaling IoT MUD Enforcement using Programmable Data Planes
                </span>
                <br />
                <span className="pubauth">
                  <span style={{ textDecoration: "underline" }}>
                    Harish S A
                  </span>
                  , Suvrima Datta, Hemanth Kothapalli, Praveen Tammana, Achmad
                  Basuki, Kotaro Kataoka, Selvakumar Manickam, Venkanna U.,
                  Yung-Wey Chong
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://noms2023.ieee-noms.org/program/technical-sessions"
                    target="_blank"
                    className="txtlink"
                  >
                    IEEE/IFIP Network Operations and Management Symposium 2023
                    (NOMS 23), Miami, Florida, USA.
                  </a>
                </span>
                <br /> <br />
                <a
                  href="https://ieeexplore.ieee.org/document/10154376"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <b>[slides]</b> <b>[talk]</b>
              </td>
            </tr>
          </table>


          {/* 2022 */}
          <span className="heading">2022</span>
          <hr />
          <table className="pubtablestyle">
            <tr>
              <td className="pubtcolone">
                <img src={ffspin} alt="FFSPIN 2022" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                  IoT MUD Enforcement in the Edge Cloud Using Programmable
                  Switch
                </span>
                <br />
                <span className="pubauth">
                  <span style={{ textDecoration: "underline" }}>
                    Harish S A
                  </span>
                  , Hemanth Kothapalli, Shubham Lahoti, Kotaro Kataoka, &
                  Praveen Tammana
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://conferences.sigcomm.org/sigcomm/2022/workshop-ffspin.html"
                    target="_blank"
                    className="txtlink"
                  >
                    Formal Foundations and Security of Programmable network
                    INfrastructures (FFSPIN) Workshop 2023, ACM SIGCOMM 2022,
                    Amsterdam, Netherlands.
                  </a>
                </span>
                <br /> <br />
                <a
                  href="https://doi.org/10.1145/3528082.3544832"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <b>[slides]</b> <b>[talk]</b>
              </td>
            </tr>
          </table>

        {/* 2021 */}
        <span className="heading">2021</span>
          <hr />
          <table className="pubtablestyle">
          
            {/* ROW1 */}
            <tr>
              <td className="pubtcolone">
                <img src={rpe} alt="RPES" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                Conceptual Framework to Mitigate Internet of Things-DDoS Attacks Using Fog Nodes
                </span>
                <br />
                <span className="pubauth">
                  Gupta, B.B. & {" "}
                  <span style={{ textDecoration: "underline" }}>
                    Harish S A
                  </span>
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://link.springer.com/conference/iccci"
                    target="_blank"
                    className="txtlink"
                  >
                    Recent Patents on Engineering 2021
                  </a>
                </span>
                <br /> <br />
                <a
                  href="https://dx.doi.org/10.2174/1872212114999200531171217"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <b>[slides]</b> <b>[talk]</b>
              </td>
            </tr>
          </table>




          {/* 2019 */}
          <span className="heading">2019</span>
          <hr />
          <table className="pubtablestyle">
            {/* ROW1 */}
            <tr>
              <td className="pubtcolone">
                <img src={iccci} alt="ICCCI 2019" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                  VWA: ViewpointS Web Application to Assess Collective Knowledge
                  Building
                </span>
                <br />
                <span className="pubauth">
                  Philippe Lemoisson, Clarel M. H. Rakotondrahaja, Aroniaina
                  Safidy Précieux Andriamialison,{" "}
                  <span style={{ textDecoration: "underline" }}>
                    Harish A. Sankar
                  </span>{" "}
                  & Stefano A. Cerri
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://link.springer.com/conference/iccci"
                    target="_blank"
                    className="txtlink"
                  >
                    International Conference on Computational Collective
                    Intelligence, ICCCI 2019, Hendaye, France
                  </a>
                </span>
                <br /> <br />
                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-030-28377-3_1"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <b>[slides]</b> <b>[talk]</b>
              </td>
            </tr>

            {/* ROW2 */}
            <tr>
              <td className="pubtcolone">
                <img src={icicct} alt="ICICCT 2019" className="imagesizepub" />
              </td>
              <td className="pubtcoltwo">
                <span className="pubhead">
                  A Risk Transfer Based DDoS Mitigation Framework for Cloud
                  Environment
                </span>
                <br />
                <span className="pubauth">
                  Gupta, B.B. & {" "}
                  <span style={{ textDecoration: "underline" }}>
                    Harish S A
                  </span>
                </span>
                <br />
                <span className="publoc">
                  <a
                    href="https://link.springer.com/conference/iccci"
                    target="_blank"
                    className="txtlink"
                  >
                    International Conference on Information, Communication and Computing Technology (ICICCT 2019), New Delhi, India
                  </a>
                </span>
                <br /> <br />
                <a
                  href="https://doi.org/10.1007/978-981-15-1384-8_10"
                  target="_blank"
                  className="txtlink"
                >
                  <b>[pdf]</b>
                </a>{" "}
                <b>[slides]</b> <b>[talk]</b>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="column side"></div>
    </>
  );
};

export default Publications;
