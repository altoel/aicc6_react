import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchTargetReality } from "../../redux/slices/apiSlice";
import {
   BarChart,
   Bar,
   Rectangle,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";
import { TARGET_REALITY_LISTS } from "../../constants/menuLists";

const TargetReality = () => {
   const state = useSelector((state) => state.apis.targetRealityData);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchTargetReality());
   }, [dispatch]);

   console.log(state);

   return (
      <div className="block-wrap w-full mt-[14px] lg:mt-0">
         <HeadTitle title="Target vs Reality" />
         <div className="line-chart w-full h-[230px]">
            {state !== null && (
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                     data={state}
                     margin={{
                        top: 5,
                        right: 5,
                        left: -20,
                        bottom: 5,
                     }}
                  >
                     <CartesianGrid
                        strokeDasharray="3 0"
                        vertical={false}
                        horizontal={true}
                        stroke="#333"
                     />
                     <XAxis
                        dataKey="month"
                        tickSize={0}
                        axisLine={false}
                        tick={({ payload, x, y, dy }) => (
                           <text
                              x={x}
                              y={y + 25}
                              dy={dy}
                              textAnchor="middle"
                              fill="#7b91b0"
                              fontSize={14}
                           >
                              {payload.value}
                           </text>
                        )}
                     />
                     <YAxis
                        tickCount={6}
                        tickSize={0}
                        tick={{
                           fill: "#7b91b0",
                           fontSize: 14,
                        }}
                        axisLine={false}
                        tickFormatter={(value) => `${value}K`}
                     />
                     <Tooltip
                        formatter={(value) => `${value} Sales`}
                        cursor={false}
                     />
                     <Bar
                        dataKey="target"
                        fill="#8884d8"
                        activeBar={false}
                        radius={[4, 4, 0, 0]}
                        barSize={16}
                     />
                     <Bar
                        dataKey="reality"
                        fill="#82ca9d"
                        activeBar={false}
                        radius={[4, 4, 0, 0]}
                        barSize={16}
                     />
                  </BarChart>
               </ResponsiveContainer>
            )}
         </div>
         <div className="block-foot">
            <div className="legend-info mt-4 flex flex-col gap-2">
               {TARGET_REALITY_LISTS.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                     <div className="info-item-left flex items-center gap-2.5">
                        <div
                           className={`info-item-icon w-10 h-10 rounded-sm flex items-center justify-center bg-[#${item.iconBg}]`}
                        >
                           <img src={item.icon} alt="" />
                        </div>
                        <div>
                           <h4 className="text-xs text-gray-300">
                              {item.title}
                           </h4>
                           <p className="text-[10px] text-gray-500">
                              {item.subtitle}
                           </p>
                        </div>
                     </div>
                     <div className="info-item-right">
                        <p className="font-semibold text-gray-300">
                           {item.value}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default TargetReality;
