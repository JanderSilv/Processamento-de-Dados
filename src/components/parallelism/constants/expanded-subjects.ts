// deps
import React from "react";

// components
import { FlynnsTaxonomySubject } from "../components";

// enums
import { Subjects } from "../enums";

export const expandedSubjects: Record<Subjects, () => JSX.Element> = {
  [Subjects.FLYNNS_TAXONOMY]: FlynnsTaxonomySubject,
  [Subjects.MISSOS_SUBJECT]: FlynnsTaxonomySubject, // @todo - mudar pro assunto de misso
  [Subjects.PARALLELISM_VS_CONCURRENCE]: FlynnsTaxonomySubject, // @todo - mudar pro assunto de riccardo
  [Subjects.CPU_VS_GPU]: FlynnsTaxonomySubject, // @todo - mudar pro assunto de comuna
};
