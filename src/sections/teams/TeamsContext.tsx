import React, { useState, useEffect, useContext, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { getAllTeams } from "../../modules/teams/application/getAll/getAllTeams";
import { createTeam } from "../../modules/teams/application/create/createTeam";
import { removeTeam } from "../../modules/teams/application/remove/removeTeam";
import { Team, TeamWithoutId } from "../../modules/teams/domain/Team";
import { TeamsRepository } from "../../modules/teams/domain/TeamsRepository";
import { updateTeam } from "../../modules/teams/application/update/updateTeam";

export interface ContextState {
  teams: Team[];
  createTeam: (data: TeamWithoutId) => Promise<void>;
  removeTeam: (teamId: string) => Promise<void>;
  updateTeam: (teamId: string, data: Partial<Team>) => Promise<void>;
}

export const TeamsContext = React.createContext<ContextState>(
  {} as ContextState
);

export const TeamsContextProvider = ({
  children,
  repository,
}: React.PropsWithChildren<{ repository: TeamsRepository }>) => {
  const [teams, setTeams] = useState<Team[]>([]);

  const getTeams = useCallback(async () => {
    const teams = await getAllTeams(repository);
    setTeams(teams);
  }, [repository]);

  const create: ContextState["createTeam"] = async ({ name }) => {
    const id = uuidv4();

    await createTeam(repository, {
      id,
      name,
    });
    await getTeams();
  };

  const remove: ContextState["removeTeam"] = async (heroId: string) => {
    await removeTeam(repository, heroId);
    await getTeams();
  };

  const update: ContextState["updateTeam"] = async (
    teamId: string,
    data: Partial<Team>
  ) => {
    await updateTeam(repository, teamId, data);
    await getTeams();
  };

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  return (
    <TeamsContext.Provider
      value={{
        teams,
        createTeam: create,
        removeTeam: remove,
        updateTeam: update,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export const useTeamsContext = () => useContext(TeamsContext);
