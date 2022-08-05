import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers";
import { useEffect } from "react";
import { useState } from "react";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [heroes, setHeroes] = useState([]);

  const { q = "" } = queryString.parse(location.search);
  useEffect(() => {
    const res = getHeroesByName(q);
    setHeroes(res);
  }, [q]);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label='form'>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1" type="submit">
              search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && heroes.length === 0 && (
            <div className="alert alert-primary">Search a hero</div>
          )}

          {q.length > 0 && heroes.length === 0 && (
            <div aria-label="alertDanger" className="alert alert-danger">There´s no result with {q}</div>
          )}

          {/*<div className="alert alert-danger">There´s no result with {q}</div>*/}

          {heroes.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
