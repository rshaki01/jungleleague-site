"use client"
import {useState} from 'react';
import StatisticsFilter from './StatisticsFilter';
import StatisticsTable from './StatisticsTable';

export default function StatisticsClient({division}) {

   

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="">
            <StatisticsFilter />
            <StatisticsTable />
        </div>
      )

}