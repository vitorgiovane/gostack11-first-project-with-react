import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Header, RepositoryInfo, Issues } from './styles'
import logo from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to='/'><FiChevronLeft size={16} />Voltar</Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars2.githubusercontent.com/u/5404361?s=460&u=9e5d316e857b1324bc178bb9da2565aa9fb9f4e4&v=4" alt="Vitor" />
          <div>
            <strong>vitorgiovane/zeruai</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`fgdfgdfg`}>
          <div>
            <strong>fghfghfghfg</strong>
            <p>fghfd gh</p>
          </div>
          <FiChevronRight size={20} />
        </Link>

      </Issues>
    </>
  )
}

export default Repository
