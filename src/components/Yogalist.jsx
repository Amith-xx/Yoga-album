import React,{useState,useMemo,} from "react";
import useFetch from "../hooks/useFetch";

import Yogacard from "./Yogacard";
import '../css/base.css';

const Yogalist = ()=>{
    const{data,loading,error}= useFetch("https://api.npoint.io/50017a7dfe9835a8351e");
    const[search,setSearch]=useState('');
    const[sort,setSort]=useState('A-Z');

    const filtered=useMemo(()=>{
         if(!data)return [];

      const list = data.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);


        if(sort==="A-Z")list.sort((a,b)=>a.name.localeCompare(b.name));
        if(sort==="Z-A")list.sort((a,b)=>b.name.localeCompare(a.name));
        if (sort === "Shortest") list.sort((a,b)=> (a.time_duration||"").length - (b.time_duration||"").length);
    if (sort === "Longest") list.sort((a,b)=> (b.time_duration||"").length - (a.time_duration||"").length);
        return list
    },[data,search,sort]);

    if (loading) return <div className="center">Loading…</div>;
  if (error) return <div className="center error">Error: {error}</div>;

  return(
    <section className="section">
        <h1 className="title">Yoga Benefits</h1>

        <div className="toolbar">
            <input className="input" placeholder="Search pose.." 
            value={search} onChange={(e)=>setSearch(e.target.value)}/>

            <select className="select" value={sort} onChange={(e)=>setSort(e.target.value)}>
                <option>A-Z</option>
                <option>Z-A</option>
                <option>Shortest</option>
                <option>Longest</option>
            </select>

            
        </div>
        <ul className="grid">
                {filtered.map((y,index)=>(
                    <Yogacard key={index} {...y}/>
                ))}
            </ul>
    </section>
  )

}

export default Yogalist;