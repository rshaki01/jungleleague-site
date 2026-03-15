"use client"

export default function SearchResultsDropDown({resultedPlayers}) {

   
    return (
        <div className=" ">
            {resultedPlayers.map((p) => <div key={p.id} className="flex flex-col mt-2">
                {p.name}
            </div>
            )}
        </div>
      )

}


