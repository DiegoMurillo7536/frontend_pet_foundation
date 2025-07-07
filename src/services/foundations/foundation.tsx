import { FoundationResponse, GoalsFromFoundationResponse } from 'types/foundation';

const FOUNDATION_API_URL = process.env.REACT_APP_PET_FOUNDATION_API_URL;
const API_KEY = process.env.REACT_APP_PET_FOUNDATION_API_KEY;

export async function get_all_foundations(): Promise<FoundationResponse> {
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'api-key': API_KEY || 'ERROR_FROM_ENV',
  };

  const headers = {
    ...defaultHeaders,
  };

  const response = await fetch(`${FOUNDATION_API_URL}/foundations/`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: FoundationResponse = await response.json();
  return data;
}

export async function get_foundation_goals(foundation_id: string): Promise<GoalsFromFoundationResponse> {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'api-key': API_KEY || 'ERROR_FROM_ENV',
  };

  const response = await fetch(`${FOUNDATION_API_URL}/foundations/${foundation_id}/goals/`, {
    method: 'GET',
    headers: defaultHeaders,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: GoalsFromFoundationResponse = await response.json();
  return data;
}