using AutoMapper;
using PortfolioSiteAPI.Data;
using PortfolioSiteAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortfolioSiteAPI
{
    public class AutoMapProfile : Profile
    {
        public AutoMapProfile()
        {
            CreateMap<Project, ProjectDto>();
            CreateMap<ProjectDto, Project>();

            CreateMap<WorkExperience, WorkExperienceDto>();
            CreateMap<WorkExperienceDto, WorkExperience>();


        }
    }
}
