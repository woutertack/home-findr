import { useState, useEffect } from "react";
import style from "./DashboardAdmin.module.css";
import SidebarAdmin from "../../../components/admin/sidebarAdmin/SidebarAdmin";
import OptionLabel from "../../../components/admin/OptionLabel";
import CardListing from "../../../components/admin/cards/CardListing";
import useFetch from "../../../hooks/useFetch";
import { IMG } from "../../../consts/Img";
import Loading from "../../../components/global/loading/Loading";

const DashboardAdmin = () => {
  const { isLoading, data, error } = useFetch("/properties");
  const [selectedOption, setSelectedOption] = useState("rent");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {}, [selectedOption]);

  const filteredData = data?.filter((property) => {
    if (selectedOption === "rent") {
      return property.saleType === "rent";
    } else if (selectedOption === "sale") {
      return property.saleType === "sale";
    }
    return true; // Display all properties if no option is selected
  });

  if (error || isLoading) return <div>{error || <Loading />}</div>;

  return (
    <div className={style.main}>
      <SidebarAdmin />

      <div className={style.container}>
        <div className={style.header}>
          <h1 className={style.title}>Dashboard Admin</h1>
        </div>

        <OptionLabel
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />

        <div className={style.listingsContainer}>
          <div className={style.listings}>
            {filteredData?.map((property) => (
              <CardListing
                key={property._id}
                src={IMG + property.img}
                alt="buy"
                title={property.title}
                type={property.type}
                price={property.price}
                saleType={property.saleType}
                city={property.city}
                zipcode={property.zipcode}
                province={property.province}
                buildyear={property.buildyear}
                sold={property.sold}
                path={`/admin/${property._id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
