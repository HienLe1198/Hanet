using AutoMapper;
using KioskManagement.Model.Models;
using KioskManagement.Model.ViewModels;
using KioskManagement.Model.MappingModels;

namespace KioskManagement.WebApi.Infrastructure.Extentsions
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AppGroup, AppGroupViewModel>().ReverseMap();
            CreateMap<AppUser, AppUserViewModel>().ReverseMap();
            CreateMap<AppRole, AppRoleViewModel>().ReverseMap();
            CreateMap<AppMenu, AppMenuViewModel>().ReverseMap();
            
        }
    }
}