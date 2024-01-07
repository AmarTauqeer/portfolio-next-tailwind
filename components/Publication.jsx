import Link from "next/link";
import React from "react";

const Publication = () => {
  return (
    <div id="publication" className="w-full p-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Publication
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-1">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              Automated GDPR Contract Compliance Verification Using Knowledge
              Graphs
            </h4>
            <p>
              Amar Tauqeer, Anelia Kurteva, Tek Raj Chhetri, Albin Ahmeti, Anna
              Fensel.
            </p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.mdpi.com/2078-2489/13/10/447/pdf"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://doi.org/10.3390/info13100447" target="_blank">
                  DOI
                </a>
              </button>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              Towards Knowledge Graphs Validation Through Weighted Knowledge
              Sources
            </h4>
            <p>
              E Huaman, A Tauqeer, A Fensel Iberoamerican Knowledge Graphs and
              Semantic Web Conference, 47-60.
            </p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a href="https://arxiv.org/pdf/2104.12622" target="_blank">
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-3-030-91305-2_4"
                  target="_blank"
                >
                  DOI
                </a>
              </button>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              Data sharing in smashHit: Making consent and contracts
            </h4>
            <p>Anelia Kurteva, Amar Tauqeer, Anna Fensel.</p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.trusts-data.eu/wp-content/uploads/2022/06/04_smashHit-Fensel_220603_WSSemanticInteroperability.pdf"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              {/* <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://link.springer.com/chapter/10.1007/978-3-030-91305-2_4" target="_blank">
                  DOI
                </a>
              </button> */}
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              The smashHitCore ontology for GDPR-compliant sensor data sharing
              in smart cities (submitted)
            </h4>
            <p>
              Anelia Kurteva, Tek Raj Chhetri, Amar Tauqeer, Rainer Hilscher,
              Anna Fensel, Kevin Nagorny, Ana Correia, Albert Zilverberg, Stefan
              Schestakov, Thorben Funke, Elena Demidova.
            </p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.mdpi.com/1424-8220/23/13/6188"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://doi.org/10.3390/s23136188" target="_blank">
                  DOI
                </a>
              </button>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              Smell and Taste Disorders Knowledge Graph: Answering Questions
              Using Health Data
            </h4>
            <p>
              Amar Tauqeer, Ismaheel Hammid, Sareh Aghaei, Parvaneh Parvin,
              Elbrich M. Postma, Anna Fensel.
            </p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S0957417423015518"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a
                  href="https://doi.org/10.1016/j.eswa.2023.121049"
                  target="_blank"
                >
                  DOI
                </a>
              </button>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              GDPR Data Sharing Contract Management and Compliance Verification
              Tool (under review in the journal SoftwarX)
            </h4>
            <p>Amar Tauqeer, Anna Fensel.</p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              {/* <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S0957417423015518"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a
                  href="https://doi.org/10.1016/j.eswa.2023.121049"
                  target="_blank"
                >
                  DOI
                </a>
              </button> */}
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              An Integrated Approach to GDPR-compliant Data Sharing Employing
              Consent, Contracts, and Licenses (under review in the journal Data
              & Knowledge Engineering)
            </h4>
            <p>Amar Tauqeer, Tek Raj Chhetri, Anna Fensel.</p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              {/* <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.trusts-data.eu/wp-content/uploads/2022/06/04_smashHit-Fensel_220603_WSSemanticInteroperability.pdf"
                  target="_blank"
                >
                  PDF
                </a>
              </button> */}
              {/* <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://link.springer.com/chapter/10.1007/978-3-030-91305-2_4" target="_blank">
                  DOI
                </a>
              </button> */}
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              SHACL-based Application of Integrity Constraints and Repairs for
              Contract Compliance Verification (submitted)
            </h4>
            <p>
              Robert David, Albin Ahmeti, Geni Bushati, Amar Tauqeer, Anna
              Fensel.
            </p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              {/* <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.trusts-data.eu/wp-content/uploads/2022/06/04_smashHit-Fensel_220603_WSSemanticInteroperability.pdf"
                  target="_blank"
                >
                  PDF
                </a>
              </button> */}
              {/* <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://link.springer.com/chapter/10.1007/978-3-030-91305-2_4" target="_blank">
                  DOI
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
