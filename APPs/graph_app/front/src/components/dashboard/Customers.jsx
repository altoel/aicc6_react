import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../redux/slices/apiSlice";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   Legend,
} from "recharts";

const Customers = () => {
   const state = useSelector((state) => state.apis.customersData);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCustomers());
   }, [dispatch]);

   //console.log(state);

   const formatLegendValue = (value, name) => {
      // console.log(value, name);
      const initialValue = 0;
      const totalValue = state?.reduce((acc, cur) => {
         if (Object.keys(cur).includes(name.dataKey)) {
            return acc + cur[name.dataKey];
         } else {
            return acc;
         }
      }, initialValue);
      return (
         <div className="custom-legend-item-text-group">
            <span className="custom-legend-item-text">
               {value.replace("_", " ")}
            </span>
            <span className="custom-legend-item-text">{" " + totalValue}</span>
         </div>
      );
   };

   return (
      <div className="block-wrap w-full mt-[14px] lg:mt-0">
         <HeadTitle title="Customers Satisfaction" />
         <div className="bar-chart w-full h-[250px] mt-6">
            {state !== null && (
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                     width={730}
                     height={250}
                     data={state}
                     margin={{ top: 10, right: 0, left: 0, bottom: 30 }}
                  >
                     <defs>
                        <linearGradient
                           id="colorLastMonth"
                           x1="0"
                           y1="0"
                           x2="0"
                           y2="1"
                        >
                           <stop
                              offset="5%"
                              stopColor="#0034f8"
                              stopOpacity={0.8}
                           />
                           <stop
                              offset="95%"
                              stopColor="#0034f8"
                              stopOpacity={0}
                           />
                        </linearGradient>
                        <linearGradient
                           id="colorThisMonth"
                           x1="0"
                           y1="0"
                           x2="0"
                           y2="1"
                        >
                           <stop
                              offset="5%"
                              stopColor="#00c415"
                              stopOpacity={0.9}
                           />
                           <stop
                              offset="95%"
                              stopColor="#00c415"
                              stopOpacity={0.05}
                           />
                        </linearGradient>
                     </defs>
                     <CartesianGrid
                        strokeDasharray="0 0"
                        vertical={false}
                        horizontal={false}
                     />
                     <XAxis dataKey="month" hide={true} />
                     <YAxis hide={true} />
                     <Tooltip />
                     <Area
                        type="monotone"
                        dataKey="last_month"
                        stroke="#0034f8"
                        fill="url(#colorLastMonth)"
                     />
                     <Area
                        type="monotone"
                        dataKey="this_month"
                        stroke="#00c415"
                        fill="url(#colorThisMonth)"
                     />
                     <Legend formatter={formatLegendValue} iconSize={12} />
                  </AreaChart>
               </ResponsiveContainer>
            )}
         </div>
      </div>
   );
};

export default Customers;
