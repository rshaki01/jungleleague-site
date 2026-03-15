"use client"
import {useState} from 'react';

export default function SearchResultsDropDown({resultedPlayers}) {

   
    return (
        <div className="l">
            {resultedPlayers.map((p) => <div className="flex flex-col">
                {p.name}
            </div>
            )}
        </div>
      )

}