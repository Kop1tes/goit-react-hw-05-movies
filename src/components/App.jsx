import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from "./Container/Container";
import NotFoundMovie from "./NotFoundView/NotFoundView";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Cast } from './Cast/Cast';
import {Reviews} from './Reviews/Reviews'

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundMovie />} />
        </Route>
      </Routes>
    </Container>
  );
};