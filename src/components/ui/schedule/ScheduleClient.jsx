"use client"
import {useState} from 'react';

import { getTeamById, getPlayersByTeamId } from '@/lib/data/helpers';

export default function ScheduleClient({}) {

     if (!open) return null

     const players = getPlayersByTeamId(teamID);
     const team = getTeamById(teamID);

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="">
          
        </div>
      )

}