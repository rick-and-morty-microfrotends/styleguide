import React from 'react'

export const Card = ({ character }) => {
    return (
        <div class="col-md-6 col-lg-4 col-12">
            <div class="card-deck">
                <div class="card mb-4">
                    <img class="card-img-top img-fluid" src={character.image} alt="Card image cap" />
                    <div class="card-body">
                        <h4 class="card-title">{character.name}</h4>
                        <p class="card-text">{character.species}</p>
                        <p class="card-text">{character.gender}</p>
                        <p class="card-text"><small class="text-muted">{character.created}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
