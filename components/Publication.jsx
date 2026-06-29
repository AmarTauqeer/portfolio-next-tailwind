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
            An Infrastructure with Semantic Contracts and Licenses for Improving Data Sharing
            </h4>
            <p>Amar Tauqeer</p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://www.researchgate.net/publication/382002379_An_Infrastructure_with_Semantic_Contracts_and_Licenses_for_Improving_Data_Sharing"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://doi.org/10.18174/653055" target="_blank">
                  DOI
                </a>
              </button>
            </div>
          </div>
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
              in smart cities
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
              GDPR Data Sharing Contract Management and Compliance Verification Tool
            </h4>
            <p>Amar Tauqeer, Anna Fensel.</p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://pdf.sciencedirectassets.com/321199/1-s2.0-S2665963824X00032/1-s2.0-S2665963824000411/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIBn%2BspTN0%2FL1epsNDhS5ZE%2B7fZw6wod%2Bb6KH8tGMbjBgAiAfFUrxx4v%2FHLB7173ApTvKmYoyIapBki%2Bog%2Bh97qurtCq8BQiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAUaDDA1OTAwMzU0Njg2NSIM%2BI8w9ASI93DlEkLJKpAFSbGM4GrWK4wo1177Czl%2BGMyWzNGagc2SOrDU9%2BNI4wsMepB3EB1aU8qgxkYTeW8g3ugIBghrolAiHubCx%2BzTP16n89HNRzCPxMGsC5FK%2BOTEnnu1NJdPdo9yVarT68XU0lFB3LdKCkKmCG9e1FQ8%2Bo2cDUP5yOMStimRDTgS%2BEXZqvMdvQBLTv2mRWSpXi7vZ%2BsqHrjo2juOq7mdUrKWoIU28RzlESuWHbgSepJdKERTbBY4PfxQ7IOaE7IirtsBsclPRW%2Fook%2FMR8cqvWB6sCASY7MzwEd4lmWleokycW6ya5zNNtcL8ms51So60Dk%2BpSETWdj%2BEyOvSsecD7lMLMYuuKIJSB68i3sawbG6Gv2JEdkQqZ0pSve2LqJE5q3rspdOnc2zVLrP97jnaae3gQjD1XzP%2BWMw95XR%2FrKHTurl6OIsmlFJq6z8cEaCl7At0ZJ%2FXj0okwzjIPgjTEjqNwWQSfchqbFMZkadBGFqaJvO0AGCJI1E%2FvyoKXlf1jnl5Ptn50hXFfzqCBZVIbM6AvFwB%2FcLybHyGROouRPfM88sqNS1okJM%2Fx3UUr3igxfYrGIbJ0E7F%2F0AQNxKYnc90lzC9FrIaUES98YMqjVC9eOAOf36b%2B3UqW0%2Bqe7X%2BLjnr0EonrYADNN9zojJ2Cn5Q4QT%2B7RjKhFm%2BFkTKmNldOfCh5ZJBe2TBTULtwlkKS1UeEdijbyUf5nEwyVjCtwpYPHa8pIxXgTmsLbiXnkELPyOIWSCq%2BHDNz2UDtJJ50W0M0e5F36qk8Bjr1ARAS6zsIEKH5iyRB7W8mWOFbs%2BozsHyvvUh0NaDfD0yHhXl1UfVPfrErjMcZyoAuH9wrdzxZfzSVlx9zZOyaWeo%2FiLyi0wioyWtAY6sgGFgY6yEH6kiclpTa3a0bgPM5mGUgF0vB8BxAHaZelwIob26puboPAjmcyje6C2df19Nrkp402SyOvVE4hBFhLLdsFZdN6fkcboLwCaSk85V%2B0%2FT%2BDhrpu%2BSa700NUdn%2FnnC1DWHwpfbwCRG3PDXv71hja9yt%2Bkx%2B20kKSSzmE2C%2F9W3HgdYfJP4gY20mI6ZwrsWHCF8jauWaSj3QAwwTiMxcOmBJBupyh2khOGtsVAm9My&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240703T175010Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY4DKBYNOT%2F20240703%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5a845ed3517242ca6e9e59c20eec499a5b3924d4dde7119e63932337a65c9996&hash=3fcc354589bd67e09f6f1bc7bb699c5f1de6e47e53ad59f974c91481a59561eb&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S2665963824000411&tid=spdf-e1880171-61d5-42fa-870b-b909709b47b9&sid=07169a8e87ab0142900a1576f2c6a9bff9b5gxrqb&type=client&tsoh=d3d3LXNjaWVuY2VkaXJlY3QtY29tLmV6cHJveHkubGlicmFyeS53dXIubmw%3D&ua=080a5d560a5d06515354&rr=89d8b760ce629fc6&cc=nl&kca=eyJrZXkiOiIzWGRIUlFpWE95T2NDT3BjdU1hdW1KVWx0ZGRVQ2pyUjhHdUFENU9VZThLS2xnMmxTdUVtRnhxOExDT05uVi8zb1dxc3V6MzA2UnJQajltT2EvYjdqSGtxMWd1dHZLd1FrMjB4dUxuaFRpR1ZQb2QrK2ZyblRMcWwvZk5sOXY1cGlSK2xiTU42T2VCamNPQjNna1hZUkNqbXFiallQbmtxTmR6NjBaUktYYzJpREpJPSIsIml2IjoiN2IzNmJlZmVlOWIwOWUxNTY2MTAwMTM2ZDQ5NGYyYWIifQ==_1720029015868"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a
                  href="https://doi.org/10.1016/j.simpa.2024.100653"
                  target="_blank"
                >
                  DOI
                </a>
              </button>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
            A SHACL-based Data Consistency Solution for Contract Compliance Verification
            </h4>
            <p>
              Robert David, Albin Ahmeti, Geni Bushati, Amar Tauqeer, Anna
              Fensel.
            </p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://ceur-ws.org/Vol-3977/OPAL2025-1.pdf"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://arxiv.org/abs/2507.15420" target="_blank">
                  DOI
                </a>
              </button>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <h4 className="text-gray-600 text-lg">
              An Integrated Approach to GDPR-compliant Data Sharing Employing
              Consent, Contracts, and Licenses
            </h4>
            <p>Amar Tauqeer, Tek Raj Chhetri, Anna Fensel.</p>
            <div className=" w-[100px] flex items-center justify-between mt-3">
              <button className="px-8 py-2 mt-4">
                <a
                  href="https://pdf.sciencedirectassets.com/271546/1-s2.0-S0169023X25X20061/1-s2.0-S0169023X25001053/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC8MGhDn42N6c1C16H9tBZ5TnodACrNd7gZ%2BGen15N2%2BwIhAJQUe37FLpxK14Irspmm%2Bt9wtvfrutxDYR1Y3%2BA6seR8KrwFCLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMMDU5MDAzNTQ2ODY1Igykj%2BhxwJO%2FXzvnyDQqkAWFkWLtOtW8FOiIbR8KGg3k0aTry%2BTA8CB45uYkSZvCWW%2B9gn%2B%2Ffl2rPK2lA8QuBsgO9vjpL1%2BbDTCAQMeH%2Fho633r06plUSXVxJDPpPTX56XIBDQ3u9OGo6IXdSbJsxLjSbEOp2H1%2FU%2BAYsAeCVbCTpl8m0JF0RJmNzomWEucVxUNf7v%2Fkc2DpW2Z8YyyZH8v%2F2ViZv9rwJqeVH1H%2FeFUcalMtGk3KnGZrbIQWBGXGK9q4FzuaNwdnazrxVHAaFR%2FavtLhr3cP%2Fxy31aGV8xQbqL8%2F1eCxgHl0u35qp5CmmLRb79iYP3ZYrSjZCpuUl2tHsDwk%2F0vZoBbdMkKNTZSgYZpCC%2ByoNg8MzsIoWDw%2FydYTKnHMAMkdRc8Qcray3XpfzUfACI8VABm6Q%2FoWj2UBDvWOaLWZFZsg1qomG2XpdN3JT0ZLsTdRcX70sPRUrj7QT6V5WNK6ihWDOdSxRHPl3ZJ39jBMY3JY913iHmL5MXRfcc%2Fy7H07LmO2minv7vMFnBnKlCnxEqZux16fTElm5MBkg6fnatWwP%2BsyZXWLInNi7HvNaPKFA%2FDdmnBZ6GHc%2BsPdf0hlbqeTOf0d7b5yoMDQ7ef%2BeaVBQbm6BKsM27xpW8jekJY6apzsriMg9D%2BsmtGW6UEeJldfUP2f5klfWhNlRY3M6XF6rgMCL4DW3Wfc4OX8Oc7lT84JP2BEd%2BIqR%2FbUvz%2FysE3d4kK5LSdn%2Fe5LSfqnmyhfHmk1mPEwCx4sxk9F227GNnP%2BSz4kySf4O6H70%2BY3unCxknehT3TidsMP6c7cOz2bT0%2BySWvWqJILAdnc5i2nUydWaT%2FE93sthiZkivnNVGALa5LSA02BnQQltlQOcw5SSaK5ZO6UbzCqworSBjqwAWacoIrAyQ%2FfAUEWvcjQ8PhO1L4SrNZ84J%2FC2J%2B3KjYMfS6A%2FX56hi7daXqp%2F60XRARUx5Fto%2FLg6tRxRPUO2oHtgPGfTcEJdIEpTZ9XY14GJjaOvpRMX7A4TBuLQb9%2F%2FUo1ot7GeTBlLpNVtbLAAcJ%2FHMbMYgCti2ZboTUh7W%2FAPYI8tGwIZj0Twv1UDNawKZ%2BwzBlgk%2BdXRu%2BWnAu8WhG8%2F61bNX8fEuq1d%2FNgsydD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260629T180959Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYUA42JC4G%2F20260629%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=07a1176fa6e4df58bbf02f24b1b68121c9764d469194afbbb43d7210b794b65f&hash=09c49e870c44beee337a92a3c16a2d58ca7dc8851ea710c9bef6e5fc2f9022e0&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0169023X25001053&tid=spdf-7404b103-0d22-414a-9397-cf5adc3daecb&sid=358755486bc3654d787a3b03624debb63517gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0f1705545456065605&rr=a136e2a7bdef3cc0&cc=at"
                  target="_blank"
                >
                  PDF
                </a>
              </button>
              <button className="px-8 py-2 mt-4 ml-5">
                <a href="https://doi.org/10.1016/j.datak.2025.102510" target="_blank">
                  DOI
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
